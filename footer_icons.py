import json, subprocess, time, urllib.request, websocket, base64
SP="/tmp/claude-1000/-home-gt48229-Desktop-Projects-ambulance-ambulance-service/453e1ef5-b019-4030-89a5-7031ec9314c9/scratchpad"
port=9240
proc=subprocess.Popen(["google-chrome","--headless=new","--disable-gpu","--hide-scrollbars",
 f"--remote-debugging-port={port}","--remote-allow-origins=*","--window-size=1200,900","http://localhost:3001"],
 stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
def get_ws():
    for _ in range(40):
        try:
            for t in json.load(urllib.request.urlopen(f"http://localhost:{port}/json")):
                if t.get("type")=="page" and t.get("webSocketDebuggerUrl"): return t["webSocketDebuggerUrl"]
        except: pass
        time.sleep(0.5)
    raise RuntimeError("no ws")
ws=websocket.create_connection(get_ws(),max_size=None); _id=0
def cmd(m,p=None):
    global _id; _id+=1; ws.send(json.dumps({"id":_id,"method":m,"params":p or {}}))
    while True:
        msg=json.loads(ws.recv())
        if msg.get("id")==_id: return msg
cmd("Page.enable"); cmd("Runtime.enable"); time.sleep(3.5)
cmd("Runtime.evaluate",{"expression":"document.querySelector('.socials').scrollIntoView({block:'center'});'ok'"})
time.sleep(1)
r=json.loads(cmd("Runtime.evaluate",{"expression":"(()=>{const e=document.querySelector('.footer-brand').getBoundingClientRect();return JSON.stringify({y:e.y,h:e.height});})()","returnByValue":True})["result"]["result"]["value"])
res=cmd("Page.captureScreenshot",{"format":"png","clip":{"x":0,"y":max(0,r["y"]-20),"width":700,"height":r["h"]+40,"scale":2}})
open(f"{SP}/footer-icons.png","wb").write(base64.b64decode(res["result"]["data"]))
print("saved footer-icons.png")
ws.close(); proc.terminate()
