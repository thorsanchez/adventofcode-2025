def is_invalid(num):
    s = str(num)
    n = len(s)
    # tekka alla mögulega mynstur lengdir
    for l in range(1, n // 2 + 1):
        if n % l == 0:
            pattern = s[:l]
            if pattern * (n // l) == s:
                return True
    return False

# main
with open("puzzle.txt") as f:
    input_line = f.read().replace("\n", "")

ranges = input_line.split(",")

all_invalid = []
for r in ranges:
    a, b = map(int, r.split("-"))
    for num in range(a, b + 1):
        if is_invalid(num):
            all_invalid.append(num)

print("Total Part 2:", sum(all_invalid))
