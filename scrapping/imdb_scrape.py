from selenium import webdriver
from datetime import datetime
import urllib.request
import json

PATH = "/usr/bin/chromedriver"
driver = webdriver.Chrome(PATH)
driver.get("https://www.imdb.com/search/title/?groups=top_100&sort=user_rating,desc")

i = 1

data = []

while i <= 100:
    for film in driver.find_elements_by_class_name("mode-advanced"):
        print(film.text)


        if i % 3 == 0:
            driver.execute_script("window.scrollBy(0, 600);")
            

        #for img in film.find_elements_by_tag_name("img"):
        #    try:
        #        url = img.get_attribute("src")
        #        urllib.request.urlretrieve(url, str(i)+".png")
        #        print(url)
        #        
        #    except:
        #        continue
        
        i=i+1

        data.append({"judul" : film.find_element_by_tag_name("h3").text.split(". ", 1)[1].split(" (", 1)[0],
        "genre": film.find_element_by_class_name("genre").text, 
        "tahun" : film.find_element_by_class_name("lister-item-year").text[1:-1], 
        "rating": film.find_element_by_tag_name("strong").text,
        "gambar": film.find_element_by_tag_name("img").get_attribute("src"),
        "waktu_scrape": datetime.now().strftime("%H:%M:%S")})

    try:
        link = driver.find_element_by_link_text("Next »")
        link.click()
    except:
        print("gagal ngeklik next")
        break;


f=open("data/imdb.json", 'w')
json.dump(data, f, indent=4)
f.close()

driver.close()
driver.quit()