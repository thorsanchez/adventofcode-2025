def solve_inventory(input_text):
    lines = input_text.strip().split('\n')
    blank_line_index = lines.index('')
    
    range_lines = lines[:blank_line_index]
    ranges = []
    for line in range_lines:
        min_val, max_val = line.split('-')
        ranges.append({'min': int(min_val), 'max': int(max_val)})
    
    id_lines = lines[blank_line_index + 1:]
    ids = [int(line) for line in id_lines]
    
    fresh_count = 0
    for id_num in ids:
        is_fresh = any(
            id_num >= range_dict['min'] and id_num <= range_dict['max']
            for range_dict in ranges
        )
        if is_fresh:
            fresh_count += 1
    
    return fresh_count

with open("input.txt", "r") as file:
    input_text = file.read()

print(solve_inventory(input_text))