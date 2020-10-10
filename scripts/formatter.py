import re


def md_to_html(md_file, out_file):
    # TODO: links
    # TODO: headers/sub-headers
    # TODO: handle bullet point lists properly
    # TODO: images/files
    # just creates <p> elements delimited by <br> elements

    with open(md_file, 'r') as f:
        lines = f.readlines()

    out_html = ''
    for line in lines:
        if line == '\n':
            continue

        if line.startswith("# "):
            out_html += '<br />\n'
            out_html += '<h2 id="title">'
            out_html += line[2:]
            out_html += '</h2>\n'
            out_html += '<br />\n'
            out_html += '<br />\n'

        else:
            out_html += '<p>\n'
            out_html += line
            out_html += '</p>\n'
            out_html += '<br />\n'

        # deal with links. this doesn't *quite* work for multi-link lines :/
        #line = re.sub(r"\[([^\[]+)\]\((.*)\)", r"<a href='\2'>\1</a>", line)

    with open(out_file, 'w') as f:
        f.write(out_html)
