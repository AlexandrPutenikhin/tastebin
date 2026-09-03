/*
    App definition.
    Copyright (C) 2026 Alexandr Putenikhin

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();

app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
    res.render('layout', {title: 'TaStebin' } );
});

app.listen(8080);
