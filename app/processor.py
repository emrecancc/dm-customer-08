import re


def parse_line(line):
    m = re.match(r'\\w+=(\\d+)', line)
    if m:
        key, value = m.group(1), int(m.group(2))
        return key, value
    return None


def process(lines):
    results = {}
    for line in lines:
        parsed = parse_line(line)
        if parsed:
            key, value = parsed
            results[key] = value
    return results
