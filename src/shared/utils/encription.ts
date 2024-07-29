import forge from 'node-forge';


export class EncriptionSessionStorage {
     private static KEYSSSIONSTORAGE = process.env.NEXT_PUBLIC_KEYSESSIONSTORAGE!;

    'use server'
    private static encryptRSA = (data: string, key: string) => {
        const iv = forge.random.getBytesSync(12);
        const salt = forge.random.getBytesSync(8);
        const keyData = forge.pkcs5.pbkdf2(key, salt, 10, 16);
        const cipher = forge.cipher.createCipher('AES-GCM', keyData);
        cipher.start({ iv, tagLength: 128 });
        cipher.update(forge.util.createBuffer(data, 'utf8'));
        cipher.finish();
        const encrypted = cipher.output.getBytes();
        const tag = cipher.mode.tag.getBytes();
        const saltHex = forge.util.bytesToHex(salt);
        return `${saltHex}:${forge.util.bytesToHex(iv)}:${forge.util.bytesToHex(encrypted)}:${forge.util.bytesToHex(tag)}`;
      };

      private static  decryptRSA = (data: string, key: string) => {
        const [saltHex, ivString, encryptedString, tagString] = data.split(':');
        const salt = forge.util.hexToBytes(saltHex);
        const keyData = forge.pkcs5.pbkdf2(key, salt, 10, 16);
        const iv = forge.util.hexToBytes(ivString);
        const encrypted = forge.util.hexToBytes(encryptedString);
        const tag = forge.util.hexToBytes(tagString);
        const decipher = forge.cipher.createDecipher(
          'AES-GCM',
          forge.util.createBuffer(keyData)
        );
        decipher.start({ iv, tag: forge.util.createBuffer(tag) });
        decipher.update(forge.util.createBuffer(encrypted));
        const pass = decipher.finish();
        if (pass) {
          return decipher.output.toString();
        }
        throw new Error('Authentication failed');
      };

      private static parseJson(jsonString: string): any {
        try {
          return JSON.parse(jsonString);
        } catch (error) {    
          return "";
        }
      }

       private static encriptPass = (data: any) => {
        const dataToString = JSON.stringify(data);
        const dataEncryptedRSA = this.encryptRSA(dataToString, this.KEYSSSIONSTORAGE);
        return dataEncryptedRSA;
      }

       private static decryptPass = (data: any) => {
        const dataDecryptedRSA = this.decryptRSA(data, this.KEYSSSIONSTORAGE);  
        return this.parseJson(dataDecryptedRSA);
      };

      'use client'
       static getDataCriptedSession<T>(
        key: string,
        defaultValue: Partial<T>| (() => T)
      ): T {
        let stored: string | null = null;
      
        if (typeof window !== 'undefined') {
          stored = sessionStorage.getItem(key);
        }
      
        if (!stored) {
          return typeof defaultValue === 'function'
            ? (defaultValue as () => T)()
            : (defaultValue as T);
        }
        const data = this.decryptPass(stored);
        return data as T;
      }

      
       static setDataCriptedSession<T = any>(
        key: string,
        value: Partial<T> | (() => T)
      ) {
          const dataEncrypted = this.encriptPass(value);
          sessionStorage.setItem(key, dataEncrypted);
      }
      

}





  

  

  
  
  