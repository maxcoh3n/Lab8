const {formatVolumeIconPath} = require('../assets/scripts/main');
// const sum = require('../assets/scripts/sum');


describe('FormatVolumeIconPath', ()=>{
    test('is at maximum at 100', ()=>{
        expect(formatVolumeIconPath(100)).toMatch(/volume-level-3/);
    });
    test('is at maximum at 67', ()=>{
        expect(formatVolumeIconPath(67)).toMatch(/volume-level-3/);
    });
    test('is at high at 66', ()=>{
        expect(formatVolumeIconPath(66)).toMatch(/volume-level-2/);
    });
    test('is at high at 34', ()=>{
        expect(formatVolumeIconPath(34)).toMatch(/volume-level-2/);
    });
    test('is at low at 33', ()=>{
        expect(formatVolumeIconPath(33)).toMatch(/volume-level-1/);
    });
    test('is at low at 1', ()=>{
        expect(formatVolumeIconPath(1)).toMatch(/volume-level-1/);
    });
    test('is muted at 0', ()=>{
        expect(formatVolumeIconPath(0)).toMatch(/volume-level-0/);
    });
});