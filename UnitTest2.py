import unittest

def rock(n):
    return n / 1 == 1
def paper(n):
    return n / 2 == 1
def scissors(n):
    return n / 3 == 1


class rockPaperScissorTests(unittest.TestCase):

    def test(self):
        self.failUnless(rock(1))
        self.failUnless(paper(2))
        self.failUnless(scissors(3))

    def testing(self):
        self.failIf(rock(2))
        self.failIf(paper(3))
        self.failIf(scissors(1))

def main():
    unittest.main()

if __name__ == '__main__':
    main()

