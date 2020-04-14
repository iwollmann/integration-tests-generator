import InsomniaParser from './insomniaParser';
import fs from 'fs';

export default function GetParser(file: string) {
    if (file.lastIndexOf('.json') !== -1) {
        const rawData = fs.readFileSync(file, {encoding: "utf-8" });
        const data = JSON.parse(rawData);

        if (data.__export_source && data.__export_source.indexOf('insomnia') !== -1) {
            return new InsomniaParser(data);
        }
    }

    return null;
}