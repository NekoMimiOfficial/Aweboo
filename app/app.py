from flask import Flask, render_template
from NekoMimi import utils, colourimi

__version__ = "0.0.1"
__build__ = 0x000006

UI_SETTINGS = {
    'theme' : 'mocha'
}

factory = colourimi.colourFactory()

def pretty_build():
    if len(hex(__build__)) < 8:
        return '0x'+((8-len(hex(__build__)))*'0')+str(hex(__build__)).replace("0x", "")

class Pallet:
    smallFG = "#888888"
    mochaBG = "#1E1E2E"
    mochaFG = "#CDD6F4"
    catBlue = "#799DDB"
    catRed = "#F38BA8"
    catCyan = "#89DCEB"
    catPink = "#F5C2E7"
    catYellow = "#F9E2AF"
    catOrange = "#F3B993"
    catGreen = "#A2DCAA"
    catPurr = "#C6A1F0"

def kprint(text, color=Pallet.mochaFG):
    factory.text = text
    factory.colour = color
    factory.cinit()
    factory.cprint()
    return

app = Flask(__name__)

@app.route("/")
def _interface():
    return render_template("interface/index.html", **UI_SETTINGS)

if __name__ == "__main__":
    kprint(utils.figlet("Aweboo", "small"))
    kprint(f"Aweboo anilist media server v{__version__} b{pretty_build()}", Pallet.smallFG)
    kprint("NekoMimiOfficial @ NekoLabs LLC 2024", Pallet.smallFG)
    app.run(host='0.0.0.0', port=8080, debug=True)
