# Mock implementation of issue tracking system

class Issue:
    def __init__(self, title, description):
        self.title = title
        self.description = description
        self.is_resolved = False

def create_issue(title, description):
    return Issue(title, description)

def resolve_issue(issue):
    issue.is_resolved = True
