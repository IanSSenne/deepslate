const t=class{constructor(t){this.xo=256*t.nextDouble(),this.yo=256*t.nextDouble(),this.zo=256*t.nextDouble(),this.p=Array(256);for(let t=0;t<256;t+=1)this.p[t]=t;for(let e=0;e<256;e+=1){const s=t.nextInt(256-e),i=this.p[e];this.p[e]=this.p[e+s],this.p[e+s]=i}}sample2D(e,s){let i,r,I;const n=(e+s)*t.F2,o=Math.floor(e+n),h=e-(o-(i=(o+(r=Math.floor(s+n)))*t.G2));let _,N;h>(I=s-(r-i))?(_=1,N=0):(_=0,N=1);const B=h-_+t.G2,T=I-N+t.G2,G=h-1+2*t.G2,g=I-1+2*t.G2,a=255&o,L=255&r,u=this.P(a+this.P(L))%12,l=this.P(a+_+this.P(L+N))%12,F=this.P(a+1+this.P(L+1))%12;return 70*(this.getCornerNoise3D(u,h,I,0,.5)+this.getCornerNoise3D(l,B,T,0,.5)+this.getCornerNoise3D(F,G,g,0,.5))}sample(t,e,s){const i=.3333333333333333*(t+e+s),r=Math.floor(t+i),I=Math.floor(e+i),n=Math.floor(s+i),o=.16666666666666666*(r+I+n),h=t-(r-o),_=e-(I-o),N=s-(n-o);let B,T,G,g,a,L;h>=_?_>=N?(B=1,T=0,G=0,g=1,a=1,L=0):h>=N?(B=1,T=0,G=0,g=1,a=0,L=1):(B=0,T=0,G=1,g=1,a=0,L=1):_<N?(B=0,T=0,G=1,g=0,a=1,L=1):h<N?(B=0,T=1,G=0,g=0,a=1,L=1):(B=0,T=1,G=0,g=1,a=1,L=0);const u=h-B+.16666666666666666,l=_-T+.16666666666666666,F=N-G+.16666666666666666,A=h-g+.3333333333333333,O=_-a+.3333333333333333,P=N-L+.3333333333333333,c=h-.5,M=_-.5,x=N-.5,d=255&r,f=255&I,D=255&n,U=this.P(d+this.P(f+this.P(D)))%12,R=this.P(d+B+this.P(f+T+this.P(D+G)))%12,p=this.P(d+g+this.P(f+a+this.P(D+L)))%12,X=this.P(d+1+this.P(f+1+this.P(D+1)))%12;return 32*(this.getCornerNoise3D(U,h,_,N,.6)+this.getCornerNoise3D(R,u,l,F,.6)+this.getCornerNoise3D(p,A,O,P,.6)+this.getCornerNoise3D(X,c,M,x,.6))}P(t){return this.p[255&t]}getCornerNoise3D(e,s,i,r,I){let n,o=I-s*s-i*i-r*r;return o<0?n=0:(o*=o,n=o*o*t.gradDot(e,s,i,r)),n}static gradDot(e,s,i,r){const I=t.GRADIENT[15&e];return I[0]*s+I[1]*i+I[2]*r}};let e=t;e.GRADIENT=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1],[1,1,0],[0,-1,1],[-1,1,0],[0,-1,-1]],e.F2=.5*(Math.sqrt(3)-1),e.G2=(3-Math.sqrt(3))/6;const s=class{constructor(t){this.seed=[BigInt(0),BigInt(0)],this.seed=t}static create(t){return new s(s.upgradeSeedTo128bit(t))}static mixStafford13(t){return((t=((t=(t^t>>s.BIGINT_30)*s.STAFFORD_1&s.MAX_ULONG)^t>>s.BIGINT_27)*s.STAFFORD_2&s.MAX_ULONG)^t>>s.BIGINT_31)&s.MAX_ULONG}static upgradeSeedTo128bit(t){t<0&&(t+=s.POW2_60);const e=t^s.SILVER_RATIO_64,i=e+s.GOLDEN_RATIO_64&s.MAX_ULONG;return[s.mixStafford13(e),s.mixStafford13(i)]}static rotateLeft(t,e){return t<<e&s.MAX_ULONG|t>>s.BIGINT_64-e}setSeed(t){this.seed=s.upgradeSeedTo128bit(t)}fork(){return new s([this.next(),this.next()])}next(){const t=this.seed[0];let e=this.seed[1];const i=s.rotateLeft(t+e&s.MAX_ULONG,s.BIGINT_17)+t&s.MAX_ULONG;return e^=t,this.seed=[s.rotateLeft(t,s.BIGINT_49)^e^e<<s.BIGINT_21&s.MAX_ULONG,s.rotateLeft(e,s.BIGINT_28)],i}nextLong(){let t=this.next();return t>s.POW2_63&&(t-=s.POW2_60),t}consume(t){let e=this.seed[0],i=this.seed[1];for(let r=0;r<t;r+=1)i^=e,e=s.rotateLeft(e,s.BIGINT_49)^i^i<<s.BIGINT_21,i=s.rotateLeft(i,s.BIGINT_28);this.seed=[e,i]}nextBits(t){return this.next()>>BigInt(64-t)}nextInt(t){let e=this.next()&s.MAX_UINT;if(t){const i=BigInt(t);let r=e*i,I=r&s.MAX_UINT;if(I<i){const t=((~i&s.MAX_UINT)+s.BIGINT_1)%i;for(;I<t;)e=this.next()&s.MAX_UINT,r=e*i,I=r&s.MAX_UINT}const n=r>>s.BIGINT_32;return Number(n)}{let t=Number(e);return t>=2147483648&&(t-=4294967296),t}}nextFloat(){return Number(this.nextBits(24))*s.FLOAT_MULTIPLIER}nextDouble(){return Number(this.nextBits(53))*s.DOUBLE_MULTIPLIER}parityConfigString(){return"seedLo: "+this.seed[0]+", seedHi: "+this.seed[1]}};let i=s;i.SILVER_RATIO_64=BigInt("7640891576956012809"),i.GOLDEN_RATIO_64=BigInt("-7046029254386353131"),i.FLOAT_MULTIPLIER=1/Math.pow(2,24),i.DOUBLE_MULTIPLIER=11102230246251565e-32,i.BIGINT_1=BigInt(1),i.BIGINT_17=BigInt(17),i.BIGINT_21=BigInt(21),i.BIGINT_27=BigInt(27),i.BIGINT_28=BigInt(28),i.BIGINT_30=BigInt(30),i.BIGINT_31=BigInt(31),i.BIGINT_32=BigInt(32),i.BIGINT_49=BigInt(49),i.BIGINT_64=BigInt(64),i.STAFFORD_1=BigInt("-4658895280553007687"),i.STAFFORD_2=BigInt("-7723592293110705685"),i.MAX_ULONG=BigInt("0xFFFFFFFFFFFFFFFF"),i.POW2_60=BigInt("0x10000000000000000"),i.POW2_63=BigInt("0x8000000000000000"),i.MAX_UINT=BigInt(4294967295);export{e as SimplexNoise,i as XoroshiroRandom};
//# sourceMappingURL=deepslate.esm.js.map
