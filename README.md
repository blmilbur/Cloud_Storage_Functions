# Cloud Storage Triggered Cloud Function Demo

Sample that shows how to trigger a Cloud Function when a file is uploaded to Cloud Storage.

## Deploy Instructions
```
gcloud config set project <project ID>
gcloud storage deploy storage_demo \
--runtime nodej18 \
--entry-point fileData \
--trigger-event google.storage.object.finalize \
--trigger-resource <name of the bucket>
```