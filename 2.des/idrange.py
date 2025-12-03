def find_invalid_ids(a, b):
    invalid = []
    # bara lengd sem er 2,4,6.
    for length in range(2, len(str(b)) + 1, 2):
        half_len = length // 2
        start = 10**(half_len - 1)
        end = 10**half_len
        for base in range(start, end):
            num = int(str(base) * 2)  # endurtaka
            if a <= num <= b:
                invalid.append(num) #tekka ef það se i range
            if num > b:
                break
    return invalid


# main
with open("puzzle.txt") as f:
    input_line = f.read().replace("\n", "")

ranges = input_line.split(",")

all_invalid = []
for r in ranges:
    a, b = map(int, r.split("-"))
    all_invalid.extend(find_invalid_ids(a, b))

print("Invalid IDs:", sorted(all_invalid))
print("Total:", sum(all_invalid))
