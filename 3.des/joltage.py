total = 0
with open("battery.txt") as b:
    for line in b:
        digits = [int(d) for d in line.strip()]
        
        max_joltage = 0
        for i in range(len(digits)):
            for j in range(i+1, len(digits)):
                candidate = 10 * digits[i] + digits[j]
                if candidate > max_joltage:
                    max_joltage = candidate
        
        total += max_joltage

print(total)