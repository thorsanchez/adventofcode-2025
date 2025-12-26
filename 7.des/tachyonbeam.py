with open("input.txt") as f:
    lines = f.read().strip().split("\n")

splitt = [col for line in lines for col, x in enumerate(line) if x == "^"]
entering = [1] + [0] * (len(splitt) - 1)

for i in range(len(splitt)):
    for j in range(1, i+1):
        sj = splitt[i - j]
        if splitt[i] == sj:
            break
        if abs(splitt[i] - sj) == 1:
            entering[i] += entering[i - j]

#7.des
print(sum(b > 0 for b in entering))
#8.des
print(sum(entering) + 1)