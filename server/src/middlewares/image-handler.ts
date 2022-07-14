import multerS3 from 'multer-s3';
import multer from 'multer';
import { S3 } from 'aws-sdk';
import { Request } from 'express';

const s3 = new S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
});

const uploadImage = multer({
    storage: multerS3({
        s3,
        bucket: 'elice-good-bye-project',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read-write',
        key: (req: Request, file, cd: any) => {
            const fileName = `photo/${Date.now()}.jpg`;
            cd(null, fileName);
        },
    }),
});

export { uploadImage };
