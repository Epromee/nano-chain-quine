# Nano quine

Inspired by https://github.com/mame/quine-relay

It made me curious how it should work, but I wanted to come up with the idea on my own (I liked the challenge so I didn't try to read the original code at all), so I still got no idea how actually the Ruby code works but I managed to implement a solution that does the same thing.

Basically it's a chain of "Hello World" printers, and the final function prints the original code.

Thus, we reduce N-tier quine to classical 1-tier quine which everybody already knows how to solve.

Here I have just 4 languages but the task of adding more languages is trivial as long as we add the compatible encoders.

    node QR.js > QR.py
    python3 QR.py > QR.cpp
    g++ -o QR QR.cpp && ./QR > QR.java
    javac QR.java && java QR > QR2.js

Or just

    node QR.js > QR.py ; python3 QR.py > QR.cpp ; g++ -o QR QR.cpp && ./QR > QR.java ; javac QR.java && java QR > QR2.js

Then do

    diff QR.js QR2.js

