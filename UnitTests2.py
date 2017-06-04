"""unitTests2"""
import unittest

def rock(n):
    """rock = 1"""
    return n / 1 == 1
def paper(n):
    """paper = 2"""
    return n / 2 == 1
def scissors(n):
    """scissors = 3"""
    return n / 3 == 1


class rockPaperScissorTests(unittest.TestCase):

    def test(self):
        """works"""
        self.failUnless(rock(1))
        self.failUnless(paper(2))
        self.failUnless(scissors(3))

    def testing(self):
        """fails"""
        self.failIf(rock(2))
        self.failIf(paper(3))
        self.failIf(scissors(1))

def main():
    """test"""
    unittest.main()

if __name__ == '__main__':
    main()

