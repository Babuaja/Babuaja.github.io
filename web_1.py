import requests
import json
from bs4 import BeautifulSoup

from datetime import datetime

# datetime object containing current date and time
now = datetime.now()

# dd/mm/YY H:M:S
dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
print("date and time =", dt_string)	

page = requests.get("https://republika.co.id/")

obj = BeautifulSoup(page.text, 'html.parser')

file = open("E:\Arsal\Materi Kuliah\Proyek 1\Web Scraping Tugas\Babuaja.github.io\dataBerita.json", "a") 

data = []

content = obj.find_all('div', class_='conten1')
for sub in content:
    block = sub.find('div', class_='teaser_conten1_center')

    category = block.find('h1')
    title = block.find('h2')
    date = block.find('div', class_='date')

    print("------------------------------")
    
    print("Judul         : ", title.text)
    print("Kategori      : ", category.text)
    print("Waktu Publish : ", date.text)

    data.append({"Judul" : title.text, "Kategori": category.text, "Waktu_Publish" : date.text, "Waktu_Scraping": dt_string})

    print("------------------------------")

fixData = json.dumps(data, indent=4, sort_keys=True)
file.writelines(fixData)
file.close()