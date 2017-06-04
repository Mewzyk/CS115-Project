"""unitTest"""
import unittest

def profile(body):
    """to be tested"""
    return body == "hello"

class profileTests(unittest.TestCase):
    """"test"""
    def test(self):
        "working"
        self.failUnless(profile("hello"))

    def testing(self):
        """not work"""
        self.failIf(profile(1))

def main():
    """main"""
    unittest.main()

if __name__ == '__main__':
    main()
