# Test suite for running all tests

import unittest

if __name__ == '__main__':
    unittest.TextTestRunner().run(unittest.defaultTestLoader.discover('../scripts'))
