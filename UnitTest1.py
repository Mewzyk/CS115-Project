import unittest

def profile(body):
    return body == ""

class profileTests(unittest.TestCase):

    def test(self):
        self.failUnless(profile("hello"))

    def testing(self):
        self.failIf(profile(1))

def main():
    unittest.main()

if __name__ == '__main__':
    main()




