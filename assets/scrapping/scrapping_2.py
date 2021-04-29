from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import urllib.request
import time

PATH = "chromedriver.exe"
driver = webdriver.Chrome(PATH)
driver.get("https://www.imdb.com/search/title/?groups=top_100&sort=user_rating,desc")
#driver.execute_script("window.scrollTo(0, Y)")


i = 1


while i <= 100:
    for film in driver.find_elements_by_class_name("mode-advanced"):
        print(film.text)


        if i % 3 == 0:
            driver.execute_script("window.scrollBy(0, 600);")

        for img in film.find_elements_by_tag_name("img"):
            try:
                url = img.get_attribute("src")
                urllib.request.urlretrieve(url, str(i)+".png")
                print(url)
                
            except:
                continue
        time.sleep(1)
        
        i=i+1

    try:
        link = driver.find_element_by_link_text("Next »")
        link.click()
        time.sleep(1)
    except:
        print("gagal ngeklick next")
        break;

driver.close()
driver.quit()