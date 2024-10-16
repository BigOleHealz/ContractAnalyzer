from flask import Blueprint, request, jsonify
from models import IssueSchema
from auth import requires_auth

create_issue_bp = Blueprint('create_issue', __name__)

@create_issue_bp.route('/api/issues', methods=['POST'])
@requires_auth
def create_issue():
    try:
        # Validate and deserialize input
        issue_data = IssueSchema().load(request.json)
        # Logic to create issue in the system
        # For example, save to database
        # issue = IssueModel(**issue_data)
        # db.session.add(issue)
        # db.session.commit()
        return jsonify({'message': 'Issue created successfully'}), 201
    except ValidationError as err:
        return jsonify(err.messages), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Note: The actual implementation of saving to the database is omitted
# and should be replaced with the actual logic to create an issue.