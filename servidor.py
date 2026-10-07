from flask import Flask, request, jsonify

app = Flask(__name__)


@app.post("/aba")
def receber_aba():
    dados = request.get_json()

    titulo = dados.get("titulo")
    url = dados.get("url")

    print("Título:", titulo)
    print("URL:", url)

    return jsonify({
        "status": "ok"
    })


if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=8765,
        debug=False
    )