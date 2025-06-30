'use client';

import { useState, useEffect } from 'react';

interface AnalyticsData {
  overview: {
    totalUsers: number;
    newUsersLast30Days: number;
    activeSessions: number;
    activeSessionsLast7Days: number;
    totalClients: number;
    clientsLast30Days: number;
  };
  tokens: {
    total: number;
    active: number;
    expired: number;
    createdLast24Hours: number;
    refreshTokens: {
      total: number;
      active: number;
    };
  };
  usage: {
    topClients: Array<{
      clientName: string;
      clientId: string;
      tokenCount: number;
    }>;
    authCodesLast7Days: number;
    authSuccessRate: number;
    dailyTokenTrend: Array<{
      date: string;
      count: number;
    }>;
  };
  realtime: {
    geography: {
      topCountries: Array<{ country: string; count: number }>;
      topCities: Array<{ city: string; count: number }>;
    };
    clientAnalysis: {
      clientTypes: Array<{ type: string; count: number }>;
      platforms: Array<{ platform: string; count: number }>;
      clientPerformance: Array<{ clientId: string; avgResponseTime: number; requestCount: number }>;
    };
    usagePatterns: {
      hourlyPattern: Array<{ hour: number; count: number }>;
      weeklyPattern: Array<{ day: string; count: number }>;
      topEndpoints: Array<{ endpoint: string; count: number }>;
    };
    performance: {
      totalRequests: number;
      avgResponseTime: number;
      p95ResponseTime: number;
      errorRate: number;
      statusCodeDistribution: Array<{ code: number; count: number }>;
    } | null;
    security: {
      events: Array<any>;
      eventCount: number;
    };
  };
  lastUpdated: string;
}

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('/api/analytics');
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
  };

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
        <p>Last updated: {new Date(data.lastUpdated).toLocaleString()}</p>
        <button onClick={fetchAnalytics} className="button">
          Refresh Data
        </button>
      </div>

      <div className="analytics-grid">
        {/* Overview Cards */}
        <div className="analytics-section">
          <h2>User Overview</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Total Users</h3>
              <p className="metric-value">{data.overview.totalUsers}</p>
            </div>
            <div className="metric-card">
              <h3>New Users (30d)</h3>
              <p className="metric-value">{data.overview.newUsersLast30Days}</p>
            </div>
            <div className="metric-card">
              <h3>Active Sessions</h3>
              <p className="metric-value">{data.overview.activeSessions}</p>
            </div>
            <div className="metric-card">
              <h3>Active (7d)</h3>
              <p className="metric-value">{data.overview.activeSessionsLast7Days}</p>
            </div>
          </div>
        </div>

        {/* Client Overview */}
        <div className="analytics-section">
          <h2>Client Overview</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Total Clients</h3>
              <p className="metric-value">{data.overview.totalClients}</p>
            </div>
            <div className="metric-card">
              <h3>New Clients (30d)</h3>
              <p className="metric-value">{data.overview.clientsLast30Days}</p>
            </div>
          </div>
        </div>

        {/* Token Metrics */}
        <div className="analytics-section">
          <h2>Token Analytics</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Total Access Tokens</h3>
              <p className="metric-value">{data.tokens.total}</p>
            </div>
            <div className="metric-card">
              <h3>Active Tokens</h3>
              <p className="metric-value">{data.tokens.active}</p>
            </div>
            <div className="metric-card">
              <h3>Expired Tokens</h3>
              <p className="metric-value">{data.tokens.expired}</p>
            </div>
            <div className="metric-card">
              <h3>Created (24h)</h3>
              <p className="metric-value">{data.tokens.createdLast24Hours}</p>
            </div>
          </div>
          
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Total Refresh Tokens</h3>
              <p className="metric-value">{data.tokens.refreshTokens.total}</p>
            </div>
            <div className="metric-card">
              <h3>Active Refresh Tokens</h3>
              <p className="metric-value">{data.tokens.refreshTokens.active}</p>
            </div>
          </div>
        </div>

        {/* Usage Analytics */}
        <div className="analytics-section">
          <h2>Usage Analytics</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Auth Codes (7d)</h3>
              <p className="metric-value">{data.usage.authCodesLast7Days}</p>
            </div>
            <div className="metric-card">
              <h3>Auth Success Rate</h3>
              <p className="metric-value">{data.usage.authSuccessRate}%</p>
            </div>
          </div>

          {/* Top Clients */}
          <div className="top-clients">
            <h3>Top Active Clients</h3>
            <div className="client-list">
              {data.usage.topClients.map((client, index) => (
                <div key={client.clientId} className="client-item">
                  <span className="client-rank">#{index + 1}</span>
                  <div className="client-info">
                    <strong>{client.clientName}</strong>
                    <small>{client.clientId}</small>
                  </div>
                  <span className="client-tokens">{client.tokenCount} tokens</span>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Token Trend */}
          <div className="token-trend">
            <h3>Daily Token Creation (Last 7 Days)</h3>
            <div className="trend-chart">
              {data.usage.dailyTokenTrend.map((day) => (
                <div key={day.date} className="trend-bar">
                  <div 
                    className="bar" 
                    style={{ 
                      height: `${Math.max((day.count / Math.max(...data.usage.dailyTokenTrend.map(d => d.count))) * 100, 10)}%` 
                    }}
                  ></div>
                  <small>{new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</small>
                  <small>{day.count}</small>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real-time Analytics */}
        <div className="analytics-section">
          <h2>Real-time Analytics (24h)</h2>
          
          {/* Performance Metrics */}
          {data.realtime.performance && (
            <div className="metrics-grid">
              <div className="metric-card">
                <h3>Total Requests</h3>
                <p className="metric-value">{data.realtime.performance.totalRequests}</p>
              </div>
              <div className="metric-card">
                <h3>Avg Response (ms)</h3>
                <p className="metric-value">{data.realtime.performance.avgResponseTime}</p>
              </div>
              <div className="metric-card">
                <h3>P95 Response (ms)</h3>
                <p className="metric-value">{data.realtime.performance.p95ResponseTime}</p>
              </div>
              <div className="metric-card">
                <h3>Error Rate</h3>
                <p className="metric-value">{data.realtime.performance.errorRate}%</p>
              </div>
            </div>
          )}

          {/* Geographic Distribution */}
          <div className="geographic-section">
            <h3>Geographic Distribution</h3>
            <div className="geo-grid">
              <div className="geo-column">
                <h4>Top Countries</h4>
                <div className="geo-list">
                  {data.realtime.geography.topCountries.map((country, index) => (
                    <div key={country.country} className="geo-item">
                      <span className="geo-rank">#{index + 1}</span>
                      <span className="geo-name">{country.country}</span>
                      <span className="geo-count">{country.count}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="geo-column">
                <h4>Top Cities</h4>
                <div className="geo-list">
                  {data.realtime.geography.topCities.map((city, index) => (
                    <div key={city.city} className="geo-item">
                      <span className="geo-rank">#{index + 1}</span>
                      <span className="geo-name">{city.city}</span>
                      <span className="geo-count">{city.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Client Analysis */}
          <div className="client-analysis">
            <h3>Client Analysis</h3>
            <div className="analysis-grid">
              <div className="analysis-column">
                <h4>Client Types</h4>
                <div className="type-list">
                  {data.realtime.clientAnalysis.clientTypes.map((type) => (
                    <div key={type.type} className="type-item">
                      <span className="type-name">{type.type}</span>
                      <span className="type-count">{type.count}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="analysis-column">
                <h4>Platforms</h4>
                <div className="type-list">
                  {data.realtime.clientAnalysis.platforms.map((platform) => (
                    <div key={platform.platform} className="type-item">
                      <span className="type-name">{platform.platform}</span>
                      <span className="type-count">{platform.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Usage Patterns */}
          <div className="usage-patterns">
            <h3>Usage Patterns</h3>
            
            {/* Hourly Pattern */}
            <div className="pattern-section">
              <h4>Hourly Traffic Pattern</h4>
              <div className="hourly-chart">
                {data.realtime.usagePatterns.hourlyPattern.map((hour) => (
                  <div key={hour.hour} className="hourly-bar">
                    <div 
                      className="hour-bar" 
                      style={{ 
                        height: `${Math.max((hour.count / Math.max(...data.realtime.usagePatterns.hourlyPattern.map(h => h.count))) * 100, 5)}%` 
                      }}
                    ></div>
                    <small>{hour.hour}:00</small>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Endpoints */}
            <div className="endpoints-section">
              <h4>Most Popular Endpoints</h4>
              <div className="endpoint-list">
                {data.realtime.usagePatterns.topEndpoints.map((endpoint, index) => (
                  <div key={endpoint.endpoint} className="endpoint-item">
                    <span className="endpoint-rank">#{index + 1}</span>
                    <span className="endpoint-path">{endpoint.endpoint}</span>
                    <span className="endpoint-count">{endpoint.count} requests</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security Events */}
          <div className="security-section">
            <h3>Security Events (24h)</h3>
            <div className="security-overview">
              <div className="metric-card security-card">
                <h4>Total Events</h4>
                <p className="metric-value">{data.realtime.security.eventCount}</p>
              </div>
              {data.realtime.security.eventCount === 0 && (
                <p className="no-events">No security events detected in the last 24 hours</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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

        .metric-card h3 {
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

        .top-clients {
          margin-top: 1.5rem;
        }

        .top-clients h3 {
          color: #333;
          margin-bottom: 1rem;
        }

        .client-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .client-item {
          display: flex;
          align-items: center;
          padding: 0.75rem;
          background: #f8f9fa;
          border-radius: 6px;
          border-left: 3px solid #28a745;
        }

        .client-rank {
          font-weight: bold;
          color: #28a745;
          margin-right: 1rem;
          min-width: 30px;
        }

        .client-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .client-info strong {
          color: #333;
        }

        .client-info small {
          color: #666;
          font-family: monospace;
        }

        .client-tokens {
          font-weight: bold;
          color: #007bff;
        }

        .token-trend {
          margin-top: 1.5rem;
        }

        .token-trend h3 {
          color: #333;
          margin-bottom: 1rem;
        }

        .trend-chart {
          display: flex;
          align-items: end;
          gap: 0.5rem;
          height: 150px;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 6px;
        }

        .trend-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          height: 100%;
        }

        .bar {
          background: linear-gradient(to top, #007bff, #66b3ff);
          width: 100%;
          min-height: 10px;
          border-radius: 2px 2px 0 0;
          margin-bottom: auto;
        }

        .trend-bar small {
          color: #666;
          font-size: 0.75rem;
          margin-top: 0.25rem;
        }

        .error {
          color: #dc3545;
          font-weight: bold;
        }

        .geographic-section, .client-analysis, .usage-patterns, .security-section {
          margin-top: 2rem;
        }

        .geo-grid, .analysis-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 1rem;
        }

        .geo-column, .analysis-column {
          background: #f8f9fa;
          padding: 1rem;
          border-radius: 6px;
        }

        .geo-column h4, .analysis-column h4 {
          color: #333;
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .geo-list, .type-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .geo-item, .type-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem;
          background: white;
          border-radius: 4px;
          border-left: 3px solid #17a2b8;
        }

        .geo-rank, .endpoint-rank {
          font-weight: bold;
          color: #17a2b8;
          min-width: 30px;
        }

        .geo-name, .type-name, .endpoint-path {
          flex: 1;
          text-align: left;
          margin: 0 0.5rem;
        }

        .geo-count, .type-count, .endpoint-count {
          font-weight: bold;
          color: #495057;
        }

        .hourly-chart {
          display: flex;
          align-items: end;
          gap: 2px;
          height: 100px;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 6px;
          margin-top: 1rem;
        }

        .hourly-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          height: 100%;
        }

        .hour-bar {
          background: linear-gradient(to top, #17a2b8, #85d3e0);
          width: 100%;
          min-height: 5px;
          border-radius: 2px 2px 0 0;
          margin-bottom: auto;
        }

        .hourly-bar small {
          color: #666;
          font-size: 0.7rem;
          margin-top: 0.25rem;
        }

        .endpoints-section {
          margin-top: 1.5rem;
        }

        .endpoint-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .endpoint-item {
          display: flex;
          align-items: center;
          padding: 0.75rem;
          background: #f8f9fa;
          border-radius: 6px;
          border-left: 3px solid #ffc107;
        }

        .endpoint-path {
          font-family: monospace;
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

        @media (max-width: 768px) {
          .metrics-grid {
            grid-template-columns: 1fr;
          }
          
          .trend-chart, .hourly-chart {
            height: 120px;
          }
          
          .client-item, .geo-grid, .analysis-grid {
            grid-template-columns: 1fr;
          }
          
          .client-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
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