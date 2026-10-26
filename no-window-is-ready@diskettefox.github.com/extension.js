/* extension.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */
import GObject from 'gi://GObject';
import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export default class NoWindowReady extends Extension {
    enable() {
        const handler = Main.windowAttentionHandler;
        this._ids = [
            handler._windowDemandsAttentionId,
            handler._windowMarkedUrgentId,
        ];
        for (const id of this._ids)
            GObject.signal_handler_block(global.display, id);
        this._sig = global.display.connect(
            'window-demands-attention',
            (_d, win) => Main.activateWindow(win)
        );
    }

    disable() {
        for (const id of this._ids ?? [])
            GObject.signal_handler_unblock(global.display, id);
        this._ids = null;
        global.display.disconnect(this._sig);
    }
}