from math import prod

with open("input.txt") as f:
    lines = f.read().strip().split("\n")
    *nums_lines, ops_line = lines

data = [(i, op) for i, x in enumerate(ops_line) if (op := {"+": sum, "*": prod}.get(x))]
starts, ops = zip(*data)
ends = [i - 1 for i in starts[1:]] + [None]

# Partur 1
nums1 = [[line[start:end] for line in nums_lines] for start, end in zip(starts, ends)]

# Partur 2
nums2 = (map("".join, zip(*ns)) for ns in nums1)

for nums in (nums1, nums2):
    print(sum(op(map(int, col)) for op, col in zip(ops, nums)))