'use client';

import { useState, useEffect, useCallback } from 'react';

export default function AnalyticsPage() {
  const [data, setData] = useState<{
    performance?: {
      totalRequests: number;
      avgResponseTime: number;
      p95ResponseTime: number;
      errorRate: number;
    };
    topEndpoints?: { endpoint: string; count: number }[];
    geography?: { country: string; count: number }[];
    security?: {
      eventCount: number;
      events?: { timestamp: string; eventType: string; ipAddress: string; clientId?: string; details: string }[];
      byOrganization?: { organization: string; eventType: string; severity: string; eventCount: number; avgRiskScore: number }[];
      privilegeEscalations?: { userName: string; userEmail: string; eventType: string; riskScore: number; timestamp: string; details: Record<string, unknown> }[];
    };
    enterprise?: {
      usersByMCPServer?: { userName: string; userEmail: string; mcpServerName: string; mcpServerIdentifier: string }[];
      toolUsage?: { toolName: string; mcpMethod: string; usageCount: number; uniqueUsers: number }[];
    };
    lastUpdated?: string;
    timeRange?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState(24);

  const fetchAnalytics = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/analytics?hours=${timeRange}`);
      if (!response.ok) {
        throw new Error('Failed to fetch analytics');
      }
      const analyticsData = await response.json();
      setData(analyticsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [timeRange]);

  const generateTestEvents = async () => {
    try {
      const eventTypes = ['AUTH_FAILURE', 'INVALID_TOKEN', 'SUSPICIOUS_ACTIVITY', 'RATE_LIMIT_EXCEEDED'];
      
      for (const eventType of eventTypes) {
        await fetch('/api/test/security-events', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ eventType, count: 2 })
        });
      }
      
      alert('Test security events generated! Refresh data in 30 seconds to see them.');
    } catch (error) {
      console.error('Failed to generate test events:', error);
      alert('Failed to generate test events');
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, [timeRange, fetchAnalytics]);

  if (loading) {
    return (
      <div className="container">
        <div className="analytics-header">
          <h1>Analytics Dashboard</h1>
          <p>Loading analytics data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="analytics-header">
          <h1>Analytics Dashboard</h1>
          <p className="error">Error: {error}</p>
          <button onClick={fetchAnalytics} className="button">
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="container">
        <div className="analytics-header">
          <h1>Analytics Dashboard</h1>
          <p>No data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="analytics-header">
        <h1>MCP OAuth Server Analytics</h1>
        <div className="header-controls">
          <div className="control-group">
            <label>Time Range:</label>
            <select 
              value={timeRange} 
              onChange={(e) => setTimeRange(Number(e.target.value))}
              className="time-select"
            >
              <option value={1}>Last 1 hour</option>
              <option value={6}>Last 6 hours</option>
              <option value={24}>Last 24 hours</option>
              <option value={72}>Last 3 days</option>
              <option value={168}>Last 7 days</option>
            </select>
          </div>
          <button onClick={fetchAnalytics} className="button">
            Refresh Data
          </button>
          <button onClick={generateTestEvents} className="button test-button">
            Generate Test Events
          </button>
        </div>
        <p>Last updated: {data.lastUpdated ? new Date(data.lastUpdated).toLocaleString() : 'Never'} | Time Range: {data.timeRange}</p>
      </div>

      <div className="analytics-grid">
        {/* Performance Metrics */}
        {data.performance && (
          <div className="analytics-section">
            <h2>📊 Performance Metrics</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <h3>Total Requests</h3>
                <p className="metric-value">{data.performance.totalRequests}</p>
              </div>
              <div className="metric-card">
                <h3>Avg Response Time</h3>
                <p className="metric-value">{data.performance.avgResponseTime}ms</p>
              </div>
              <div className="metric-card">
                <h3>P95 Response Time</h3>
                <p className="metric-value">{data.performance.p95ResponseTime}ms</p>
              </div>
              <div className="metric-card">
                <h3>Error Rate</h3>
                <p className="metric-value">{data.performance.errorRate}%</p>
              </div>
            </div>
          </div>
        )}

        {/* Top Endpoints */}
        {data.topEndpoints && data.topEndpoints.length > 0 && (
          <div className="analytics-section">
            <h2>🔗 Most Popular Endpoints</h2>
            <div className="endpoint-list">
              {data.topEndpoints.map((endpoint, index) => (
                <div key={endpoint.endpoint} className="endpoint-item">
                  <span className="endpoint-rank">#{index + 1}</span>
                  <span className="endpoint-path">{endpoint.endpoint}</span>
                  <span className="endpoint-count">{endpoint.count} requests</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Geographic Distribution */}
        {data.geography && data.geography.length > 0 && (
          <div className="analytics-section">
            <h2>🌍 Geographic Distribution</h2>
            <div className="geo-list">
              {data.geography.map((country, index) => (
                <div key={country.country} className="geo-item">
                  <span className="geo-rank">#{index + 1}</span>
                  <span className="geo-name">{country.country}</span>
                  <span className="geo-count">{country.count} requests</span>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* Enterprise Analytics */}
        {data.enterprise && (
          <div className="analytics-section">
            <h2>Enterprise Analytics</h2>
            
            {/* Which MCP servers are users using? */}
            {data.enterprise.usersByMCPServer && data.enterprise.usersByMCPServer.length > 0 && (
              <div className="enterprise-subsection">
                <h3>Which MCP servers are users using?</h3>
                <div className="user-mcp-list">
                  {data.enterprise.usersByMCPServer.map((item, index) => (
                    <div key={index} className="user-mcp-item">
                      <div className="user-info">
                        <strong>{item.userName}</strong>
                        <span className="user-email">{item.userEmail}</span>
                      </div>
                      <div className="mcp-info">
                        <span className="mcp-name">{item.mcpServerName}</span>
                        <span className="mcp-identifier">{item.mcpServerIdentifier}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MCP Tool Usage */}
            {data.enterprise.toolUsage && data.enterprise.toolUsage.length > 0 && (
              <div className="enterprise-subsection">
                <h3>Most Used MCP Tools</h3>
                <div className="tool-usage-list">
                  {data.enterprise.toolUsage.map((tool, index) => (
                    <div key={index} className="tool-usage-item">
                      <span className="tool-rank">#{index + 1}</span>
                      <div className="tool-details">
                        <strong>{tool.toolName}</strong>
                        <span className="tool-method">{tool.mcpMethod}</span>
                      </div>
                      <div className="tool-stats">
                        <span>{tool.usageCount} calls</span>
                        <span>{tool.uniqueUsers} users</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Enhanced Security Events */}
        {data.security && (
          <div className="analytics-section">
            <h2>Security Monitoring</h2>
            
            {/* Security events by organization */}
            {data.security.byOrganization && data.security.byOrganization.length > 0 && (
              <div className="enterprise-subsection">
                <h3>Security events by organization</h3>
                <div className="security-org-list">
                  {data.security.byOrganization.map((item, index) => (
                    <div key={index} className="security-org-item">
                      <div className="org-name">{item.organization}</div>
                      <div className="event-details">
                        <span className={`event-type ${item.severity}`}>{item.eventType}</span>
                        <span className="event-count">{item.eventCount} events</span>
                        <span className="risk-score">Risk: {item.avgRiskScore}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Privilege escalation attempts */}
            {data.security.privilegeEscalations && data.security.privilegeEscalations.length > 0 && (
              <div className="enterprise-subsection">
                <h3>Users with elevated privilege attempts (Last 7 days)</h3>
                <div className="privilege-escalation-list">
                  {data.security.privilegeEscalations.map((item, index) => (
                    <div key={index} className="privilege-escalation-item">
                      <div className="user-info">
                        <strong>{item.userName}</strong>
                        <span className="user-email">{item.userEmail}</span>
                      </div>
                      <div className="escalation-details">
                        <span className="risk-score">Risk Score: {item.riskScore}</span>
                        <span className="timestamp">{new Date(item.timestamp).toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Overall security summary */}
            <div className="security-overview">
              <div className="metric-card security-card">
                <h4>Total Events</h4>
                <p className="metric-value">{data.security?.eventCount || 0}</p>
              </div>
              {(!data.security?.eventCount || data.security.eventCount === 0) && (
                <p className="no-events">No security events detected in the selected time range</p>
              )}
            </div>
          </div>
        )}

        {/* System Info */}
        <div className="analytics-section">
          <h2>System Information</h2>
          <div className="info-grid">
            <div className="info-card">
              <h4>Enhanced Analytics</h4>
              <p>Enterprise user tracking with SSO context</p>
              <p>MCP server and tool usage monitoring</p>
              <p>Real-time security threat detection</p>
              <p>Role-based access analytics</p>
            </div>
            <div className="info-card">
              <h4>Security Features</h4>
              <p>Privilege escalation detection</p>
              <p>Geographic anomaly monitoring</p>
              <p>Rate limiting and brute force protection</p>
              <p>Token reuse and audience validation</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .analytics-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .analytics-header h1 {
          color: #333;
          margin-bottom: 0.5rem;
        }

        .analytics-header p {
          color: #666;
          margin-bottom: 1rem;
        }

        .header-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .control-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .control-group label {
          font-weight: 500;
          color: #495057;
        }

        .time-select {
          padding: 0.5rem;
          border: 1px solid #ced4da;
          border-radius: 4px;
          background: white;
          color: #495057;
        }

        .button {
          padding: 0.5rem 1rem;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.2s;
        }

        .button:hover {
          background: #0056b3;
        }

        .test-button {
          background: #dc3545;
        }

        .test-button:hover {
          background: #c82333;
        }

        .analytics-grid {
          display: grid;
          gap: 2rem;
        }

        .analytics-section {
          background: white;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .analytics-section h2 {
          color: #333;
          margin-bottom: 1rem;
          border-bottom: 2px solid #f0f0f0;
          padding-bottom: 0.5rem;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .metric-card {
          background: #f8f9fa;
          border-radius: 6px;
          padding: 1rem;
          text-align: center;
          border-left: 4px solid #007bff;
        }

        .metric-card h3, .metric-card h4 {
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .metric-value {
          font-size: 2rem;
          font-weight: bold;
          color: #007bff;
          margin: 0;
        }

        .endpoint-list, .geo-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .endpoint-item, .geo-item {
          display: flex;
          align-items: center;
          padding: 0.75rem;
          background: #f8f9fa;
          border-radius: 6px;
          border-left: 3px solid #28a745;
        }

        .endpoint-rank, .geo-rank {
          font-weight: bold;
          color: #28a745;
          margin-right: 1rem;
          min-width: 30px;
        }

        .endpoint-path, .geo-name {
          flex: 1;
          text-align: left;
          margin: 0 0.5rem;
        }

        .endpoint-path {
          font-family: monospace;
          color: #495057;
        }

        .endpoint-count, .geo-count {
          font-weight: bold;
          color: #495057;
        }

        .security-card {
          border-left-color: #dc3545;
        }

        .security-overview {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-top: 1rem;
        }

        .no-events {
          color: #28a745;
          font-style: italic;
          margin: 0;
        }

        .security-events {
          margin-top: 1rem;
        }

        .security-event {
          background: #f8f9fa;
          border-left: 4px solid #dc3545;
          padding: 1rem;
          margin-bottom: 0.5rem;
          border-radius: 0 6px 6px 0;
        }

        .event-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .event-type {
          background: #dc3545;
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .event-time {
          color: #666;
          font-size: 0.8rem;
        }

        .event-details {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .event-details span {
          background: #e9ecef;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-family: monospace;
        }

        .event-description {
          color: #495057;
          font-style: italic;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .info-card {
          background: #f8f9fa;
          padding: 1rem;
          border-radius: 6px;
          border-left: 4px solid #17a2b8;
        }

        .info-card h4 {
          color: #333;
          margin-bottom: 0.5rem;
        }

        .info-card p {
          margin: 0.25rem 0;
          color: #495057;
          font-size: 0.9rem;
        }

        .error {
          color: #dc3545;
          font-weight: bold;
        }

        /* Enterprise Analytics Styles */
        .enterprise-subsection {
          margin-bottom: 2rem;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 6px;
          border-left: 4px solid #007bff;
        }

        .enterprise-subsection h3 {
          color: #333;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .user-mcp-list, .tool-usage-list, .security-org-list, .privilege-escalation-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .user-mcp-item, .tool-usage-item, .security-org-item, .privilege-escalation-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          background: white;
          border-radius: 6px;
          border-left: 3px solid #28a745;
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .user-email {
          font-size: 0.8rem;
          color: #666;
          font-family: monospace;
        }

        .mcp-info {
          display: flex;
          flex-direction: column;
          text-align: right;
        }

        .mcp-name {
          font-weight: bold;
          color: #333;
        }

        .mcp-identifier {
          font-size: 0.8rem;
          color: #666;
          font-family: monospace;
        }

        .tool-rank {
          font-weight: bold;
          color: #007bff;
          margin-right: 1rem;
          min-width: 30px;
        }

        .tool-details {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .tool-method {
          font-size: 0.8rem;
          color: #666;
          font-family: monospace;
        }

        .tool-stats {
          display: flex;
          flex-direction: column;
          text-align: right;
          font-size: 0.9rem;
          color: #495057;
        }

        .org-name {
          font-weight: bold;
          color: #333;
        }

        .event-details {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .event-type {
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: bold;
          color: white;
        }

        .event-type.low { background: #28a745; }
        .event-type.medium { background: #ffc107; color: #333; }
        .event-type.high { background: #fd7e14; }
        .event-type.critical { background: #dc3545; }

        .event-count, .risk-score {
          font-size: 0.9rem;
          color: #495057;
        }

        .escalation-details {
          display: flex;
          flex-direction: column;
          text-align: right;
        }

        .timestamp {
          font-size: 0.8rem;
          color: #666;
        }

        @media (max-width: 768px) {
          .metrics-grid {
            grid-template-columns: 1fr;
          }
          
          .header-controls {
            flex-direction: column;
            gap: 1rem;
          }
          
          .security-overview {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
