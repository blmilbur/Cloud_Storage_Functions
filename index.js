exports.fileData = (file, context) => {
    console.log(`File uploaded!`);
    console.log(`   Event: ${context.eventId}`);
    console.log(`   Event Type: ${context.eventType}`);
    console.log(`   Bucket: ${file.bucket}`)
    console.log(`   File: ${file.name}`)
}