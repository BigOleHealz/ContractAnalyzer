from marshmallow import Schema, fields, ValidationError

class IssueSchema(Schema):
    title = fields.Str(required=True)
    description = fields.Str(required=True)
    priority = fields.Str(required=True)

    @staticmethod
    def validate_priority(value):
        if value not in ['low', 'medium', 'high']:
            raise ValidationError('Priority must be low, medium, or high.')
    priority = fields.Str(validate=validate_priority)