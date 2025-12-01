position = 50
zero_counter = 0

with open("puzzle_input.txt") as p:
    for line in p:
        line = line.strip()
        direction = line[0]
        amount = int(line[1:])

        step = -1 if direction == "L" else 1

        #færa okkur eittskref i einu
        for _ in range(amount):
            position = (position + step) % 100
            if position == 0:
                zero_counter += 1
print(zero_counter)