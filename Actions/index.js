
// Import commands:
import './Anibis'
import './Verifications'
import './API'
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand({
    customDiffDir: "Reports/Screenshots/Diff",
    customSnapshotsDir: "Reports/Screenshots"
});