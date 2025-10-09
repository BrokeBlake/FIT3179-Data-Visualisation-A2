import os
import pandas as pd
import requests

def check_github_raw_url(url):
    try:
        r = requests.get(url)
        if r.status_code != 200:
            print(f"URL not reachable (HTTP {r.status_code}): {url}")
            return False
        # try to read as CSV
        from io import StringIO
        df = pd.read_csv(StringIO(r.text), nrows=5)
        print(f"GitHub raw URL is accessible and readable: {url}")
        return True
    except Exception as e:
        print(f"Error reading from URL: {e}")
        return False


check_github_raw_url("https://raw.githubusercontent.com/BrokeBlake/FIT3179-Data-Visualisation-A2/main/data/builtup-point-data.csv")