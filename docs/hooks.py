import os
import logging
from mkdocs.config import config_options
from mkdocs.plugins import BasePlugin

logger = logging.getLogger(__name__)

class CustomHooksPlugin(BasePlugin):
    """Custom hooks for MCP OAuth Sample documentation"""
    
    def on_env(self, env, config, files, **kwargs):
        """Add custom environment variables to the Jinja2 environment"""
        env.globals['project_version'] = os.environ.get('PROJECT_VERSION', '1.0.0')
        env.globals['build_date'] = os.environ.get('BUILD_DATE', 'unknown')
        return env
    
    def on_page_markdown(self, markdown, page, config, files, **kwargs):
        """Process markdown before conversion to HTML"""
        # Add custom processing if needed
        return markdown