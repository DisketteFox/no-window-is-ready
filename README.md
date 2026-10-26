<h1 align="center">No 'Window is ready'</h1>

An extension that blocks the "Window is ready" notification and focuses the window instead.

## Screenshot

<p align="center">
  <img src="./docs/screenshots/scr1.png" width="55%">
</p>

## Requirements

- GNOME Shell 45 to 51.

## Installation

### From source

```bash
git clone https://codeberg.org/DisketteFox/no-window-is-ready
cd no-window-is-ready 
cp -r no-window-is-ready@diskettefox.github.com ~/.local/share/gnome-shell/extensions/
gnome-extensions enable no-window-is-ready@diskettefox.github.com
```

Then log out and back in (Wayland).

## How it works

The extension blocks `window-demands-attention` and `window-marked-urgent` handlers and then it activates the window directly.

## License

No 'Window is ready' is licensed under the GNU General Public License v2.0 or later (GPL-2.0-or-later). See the `LICENSE` file for the full text.