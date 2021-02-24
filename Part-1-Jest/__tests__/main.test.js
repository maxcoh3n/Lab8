const {formatVolumeIconPath} = require('../assets/scripts/main');
// const sum = require('../assets/scripts/sum');


describe('FormatVolumeIconPath', ()=>{
    test('is at maximum', ()=>{
        expect(formatVolumeIconPath(100)).toMatch(/volume-level-3/);
    });
    test('is at maximum', ()=>{
        expect(formatVolumeIconPath(67)).toMatch(/volume-level-3/);
    });
    test('is at high', ()=>{
        expect(formatVolumeIconPath(66)).toMatch(/volume-level-2/);
    });
    test('is at high', ()=>{
        expect(formatVolumeIconPath(34)).toMatch(/volume-level-2/);
    });
    test('is at low', ()=>{
        expect(formatVolumeIconPath(1)).toMatch(/volume-level-1/);
    });
    test('is muted', ()=>{
        expect(formatVolumeIconPath(0)).toMatch(/volume-level-0/);
    });
});