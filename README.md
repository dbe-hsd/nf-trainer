![EILD-Logo](src/img/eild_header_logo.png)

# NF-Trainer

Dieser Normalform-Trainer ist eine Lernanwendung für Normalformen bzw. den Normalisierungsprozess in Datenbanken. Die Anwendung wurde ursprünglich von der [Technischen Hochschule Köln](https://www.th-koeln.de/) im Rahmen der Online-Lernplattform [EDB](https://edb2.gm.th-koeln.de/index) entwickelt und wurde nun als Teil des EILD.nrw Projektes weiterentwickelt und als Open-Source Anwendung veröffentlicht.

In EILD wird ein Ansatz mit weitgehender Adaptierbarkeit und Wiederverwendbarkeit der Lehrinhalte umgesetzt.

## Further information
- [EILD.nrw Informationen](https://medien.hs-duesseldorf.de/personen/rakow/Seiten/09062020_EILD.aspx?RootFolder=%2Fpersonen%2Frakow%2FPublishingImages%2FMeldungen&FolderCTID=0x0120004A9137CD4CD45345B9F581109987E838&View=%7BC6A3F1CE-FF3B-4025-A149-D6A910C2E30B%7D#:~:text=NRW%20zur%20Erstellung%20von%20offenen,schafft%20sich%20ihre%20Werkzeuge%20selbst.)
- [EILD.nrw GitHub](https://github.com/EILD-nrw)

## Verwendung

Es gibt verschiedene Möglichkeiten den Trainer zu benutzen. Am einfachsten ist die Verwendung der [auf GitHub bereitgestellten Version](https://eild-nrw.github.io/nf-trainer/#/). Diese wird bei Änderungen regelmäßig aktualisiert und muss nicht selbst betrieben werden.

Alternativ lässt sich diese Version aus dem `gh-pages`-Branch als .zip-Datei herunterladen und anschließend auf Ilias, Moodle oder ähnliche Plattformen hochladen. Dort muss diese lediglich entpackt werden. Ilias erkennt die `index.html` automatisch als Startpunkt der Anwendung, auf anderen Plattformen muss dies eventuell noch manuell passieren.

Als letzte Alternative kann die Anwendung auch aus dem Sourcecode generiert werden. Das entsprechende Build-Skript aus der Package.json lässt sich mit `npm run build` ausführen. Der generierte Ordner ist dann identisch zu dem, der auch im `gh-pages`-Branch liegt.

Für eine Anpassung der Aufgaben (Ergänzung von Erklärungstext oder Korrekturen) können die json-Dateien in `public/tasks` angepasst werden. Um eine neue Aufgabe zu ergänzen, muss in den gleichen Ordner eine neue .json-Datei integriert und in `public/taskSettings.json` eingetragen werden.

## Aufgabenübersicht
Die Tabelle enthält eine Übersicht aller im 3NF-Trainer enthaltenen Aufgaben mit der Information, welche Normalformen jeweils trainiert werden.

| Aufgabe | Thema                    | 1NF               | 2NF               | 3NF                    |
|---------|--------------------------|-------------------|-------------------|------------------------|
| 1       | Wohnungsunternehmen      | bereits in 1NF    | noch nicht in 2NF | noch nicht in 3NF      |
| 2       | Patienten der Arztpraxis | noch nicht in 1NF | noch nicht in 2NF | noch nicht in 3NF      |
| 3       | Skriptverkauf            | bereits in 1NF    | noch nicht in 2NF | mit 2NF bereits in 3NF |
| 4       | Küchen-Großhändler       | bereits in 1NF    | noch nicht in 2NF | noch nicht in 3NF      |
| 5       | Autohändler              | bereits in 1NF    | noch nicht in 2NF | noch nicht in 3NF      |
| 6       | Prüfungsamt              | bereits in 1NF    | noch nicht in 2NF | noch nicht in 3NF      |
| 7       | Lebensmittelprüfung      | bereits in 1NF    | noch nicht in 2NF | mit 2NF bereits in 3NF |
| 8       | Zimmer im Krankenhaus    | bereits in 1NF    | noch nicht in 2NF | noch nicht in 3NF      |
| nicht integriert  | Autohändler 2            | bereits in 1NF    | noch nicht in 2NF | noch nicht in 3NF      |

## Lizenz
[![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg
