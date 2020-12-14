import requests

def get_cctv(id):
    session_requests = requests.session()
    result = session_requests.get("http://www.bmatraffic.com/index.aspx")
    cookie = result.headers['set-cookie'].split(';')[0]
    PlayVideo_url = "http://www.bmatraffic.com/PlayVideo.aspx?ID="+str(id)
    session_requests.get(PlayVideo_url, headers = dict(Cookie = cookie))
    PlayVideo_url = "http://www.bmatraffic.com/show.aspx?image="+str(id)
    result1 = session_requests.get(PlayVideo_url, headers = dict(Cookie = cookie))
    file = open("res.jpg", 'wb')
    file.write(result1.content)
    file.close()
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