def format_report(title, count, data):
    precision = data.get('precision', 2)
    total = data.get('total', 1)
    rate = count / max(total, 1) * 100
    report = f"Report: {title!r} | Items: {count:,} | Rate: {rate:.{precision}f}%"
    print(report)
    return report


def print_items(*items):
    print(f"Items: {', '.join(map(str, items))}")