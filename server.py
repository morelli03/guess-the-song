#!/usr/bin/env python3
"""
SONGLESS IT - Local HTTP Server
Avvia un server web locale zero-configurazione e apre automaticamente il browser.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

DEFAULT_PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class SonglessRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Permetti CORS e disabilita cache locale per facilitare modifiche e sviluppo
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def guess_type(self, path):
        ctype = super().guess_type(path)
        # Forza mime-type corretto per JavaScript ES Modules su Windows
        if path.endswith('.js'):
            return 'application/javascript; charset=utf-8'
        elif path.endswith('.css'):
            return 'text/css; charset=utf-8'
        return ctype

def find_available_port(start_port=DEFAULT_PORT):
    import socket
    port = start_port
    while port < start_port + 50:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            if s.connect_ex(('127.0.0.1', port)) != 0:
                return port
            port += 1
    return start_port

class ThreadedTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    daemon_threads = True
    allow_reuse_address = True

def run_server():
    # Assicura compatibilità con console Windows cp1252
    if sys.stdout and hasattr(sys.stdout, 'reconfigure'):
        try:
            sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        except Exception:
            pass

    port = find_available_port(DEFAULT_PORT)
    url = f"http://localhost:{port}"

    print("=" * 60)
    print("  [SONGLESS IT] Server Locale Avviato con successo!")
    print(f"  -> Apri nel browser: {url}")
    print("  -> Premi CTRL + C nel terminale per arrestare il server")
    print("=" * 60)

    # Apri automaticamente il browser
    try:
        webbrowser.open(url)
    except Exception as e:
        print(f"Nota: Impossibile aprire automaticamente il browser ({e}).")

    with ThreadedTCPServer(("127.0.0.1", port), SonglessRequestHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n[INFO] Server arrestato.")
            sys.exit(0)

if __name__ == "__main__":
    run_server()
