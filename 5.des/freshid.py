def freshid(input_text):
    lines = input_text.strip().split('\n')
    blank_line_index = lines.index('')
    range_lines = lines[:blank_line_index]
    
    #fylki til að henda inn ranes
    ranges = []
    for line in range_lines:
        min_val, max_val = line.split('-')
        ranges.append((int(min_val), int(max_val)))
        #endar þa með td (3, 5), (10, 14), (16, 20)
    
    # raða ranges i rettri röð
    ranges.sort()
    merged = []

    for start, end in ranges:
        #ef merged er empty eða current range er ekki að overlapa við siðasta merged range
        if not merged or start > merged[-1][1] + 1:
            merged.append([start, end])
        else:
            # lengja siðasta merged range
            merged[-1][1] = max(merged[-1][1], end)
    
    # tellja öll id i öll merged ranges
    total = 0
    for start, end in merged:
        total += (end - start + 1)
    
    return total

with open("input.txt", "r") as file:
    input_text = file.read()

print(freshid(input_text))