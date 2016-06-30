// Get expresskit
import Expresskit from 'expresskit';

// Import our routes
import './auth/auth.router';
import './user/user.router';
import './widget/widget.router';

Expresskit.start();