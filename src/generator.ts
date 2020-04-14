import { exec } from 'child_process';
import { TemplateResult } from './definitions/Request';

export default function generate(results: TemplateResult[]) {
    try {
        results.forEach(result => {
            exec(`hygen generator tests '${encodeURIComponent(JSON.stringify(result))}'`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                    return;
                }
            });
        });    
    } catch (error) {
        console.log(`error: ${error}`);
    }
}