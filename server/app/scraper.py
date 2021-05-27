import requests
import time
credentials = dict()

def get_credential(id, session_requests):
    result = session_requests.get("http://www.bmatraffic.com/index.aspx")
    cookie = result.headers['set-cookie'].split(';')[0]
    PlayVideo_url = "http://www.bmatraffic.com/PlayVideo.aspx?ID=" + str(id)
    session_requests.get(PlayVideo_url, headers=dict(Cookie=cookie))
    credentials[id] = {"cookie": cookie, "time": time.time()}
    print("update session:", str(id))

async def get_cctv(id):
    session_requests = requests.session()
    if id not in credentials:
        get_credential(id, session_requests)
    elif time.time() - credentials[id]["time"] >= 300:
        get_credential(id, session_requests)
    cookie = credentials[id]["cookie"]
    PlayVideo_url = "http://www.bmatraffic.com/show.aspx?image="+str(id)
    result1 = session_requests.get(PlayVideo_url, headers = dict(Cookie = cookie))
    return result1.content

if __name__ == '__main__':
    import cv2
    import numpy as np

    image = get_cctv(533)
    image = np.asarray(bytearray(image), dtype="uint8")
    image = cv2.imdecode(image, cv2.IMREAD_COLOR)
    cv2.imshow('533', image)
    cv2.waitKey(0)
    cv2.destroyWindow()