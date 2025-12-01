position = 50;
zero_count = 0;

with open('puzzle_input.txt') as p:
    for line in p:
        line = line.strip();

        direction = line[0]; # l eða r
        amount = int(line[1:]) #allt eftir það (tala)

        #allt fer eftir átt
        if direction == 'L':
            position = (position - amount) % 100 # modulo 100 heldur okkur innan 0-99
        else:
            position = (position + amount) % 100
        
        if position == 0:
            zero_count += 1
print(zero_count)
