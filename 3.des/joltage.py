total = 0
#main
with open("battery.txt") as b:
    for line in b:
        #breyta char yfir i int
        numer = [int(d) for d in line.strip()]
        #taka tvær stærstu tölur
        a, b = sorted(numer, reverse=True)[:2]
        total += a * 10 + b
        print(a*10 + b, total)
print(total)