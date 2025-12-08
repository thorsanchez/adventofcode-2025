def largest_with_12_digits(s: str) -> int:
    """
    Return the largest 12-digit number you can form from s
    by keeping exactly 12 digits in their original order.
    """
    n = len(s)
    #hversu marga tölur ma fjarlæga
    remove = n - 12
    keep = []

    for digit in s:
        #while remove er>0 og núverandi digit er> síðasta keep þá eyða því
        while remove and keep and keep[-1] < digit:
            keep.pop()
            remove -= 1
        keep.append(digit)

    #ef tölur halda alltaf áfram að minnka þá eyða aftasta tölu while remove>0
    while remove:
        keep.pop()
        remove -= 1

    # Nuna er keep nákvæmlega 12 tölu string 
    
    return int(''.join(keep))


total = 0
with open("battery.txt") as b:
    for line in b:
        line = line.strip()
        if not line:
            continue
        total += largest_with_12_digits(line)

print(total)