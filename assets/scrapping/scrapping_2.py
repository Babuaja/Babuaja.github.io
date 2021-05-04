from selenium import webdriver
from datetime import datetime
import urllib.request
import json

PATH = "/usr/bin/chromedriver"
driver = webdriver.Chrome(PATH)
driver.get("https://www.imdb.com/search/title/?count=100&groups=top_1000&sort=user_rating")

i = 1

data = []

while i <= 1000:
    for film in driver.find_elements_by_class_name("mode-advanced"):
        
        judul =  film.find_element_by_tag_name("h3").text.split(". ", 1)[1].split(" (", 1)[0]
        genre = film.find_element_by_class_name("genre").text
        tahun =  film.find_element_by_class_name("lister-item-year").text[1:-1]
        durasi = film.find_element_by_class_name("runtime").text.split(" m", 4)[0]
        rating = film.find_element_by_tag_name("strong").text
        votes = film.find_elements_by_name("nv")[0].text.replace(',', '')
        try:
            gross = film.find_elements_by_name("nv")[1].text.replace('$', '').replace('M', '')
        except:
            gross = str(0)
        gambar = film.find_element_by_tag_name("img").get_attribute("src")
        waktu_scrape = datetime.now().strftime("%H:%M:%S")

        raw = {
            "judul" : judul,
            "genre": genre,
            "tahun" : tahun,
            "durasi" : durasi,
            "rating": rating,
            "votes" : votes,
            "gross" : gross,
            "gambar": gambar,
            "waktu_scrape": waktu_scrape
        }

        print(raw)
        
        data.append(raw)

        if i % 3 == 0:
            driver.execute_script("window.scrollBy(0, 600);")
        i=i+1

    try:
        link = driver.find_element_by_link_text("Next »")
        link.click()
    except:
        print("gagal ngeklik next")
        break;


f=open("data/imdbtop1000.json", 'w')
json.dump(data, f, indent=4)
f.close()

driver.close()
driver.quit()