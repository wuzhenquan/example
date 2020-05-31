简单且原始

1. 安装

   ```shell
   npm init -y
   npm i -S koa koa-bodyparser koa-json koa-logger koa-router
   npm i -g typescript
   npm i -D @types/node
   ```

2. ⭐️ 创建目录分为 src 和 dist

3. ⭐️ 创建文件 [tsconfig.json](https://github.com/masnun/koamed/blob/c0cd9552dc/tsconfig.json) 

4. ⭐️ 创建文件 [src/index.ts](https://github.com/masnun/koamed/blob/c0cd9552dc/src/index.ts) 

5. ⭐️ 创建文件 [/index.js](https://github.com/masnun/koamed/blob/c0cd9552dc/index.js) 

6. ⭐️ 执行 `tsc`. That should create a index.js file in the `dist` directory. 

7. ⭐️ 执行 `node .` 虽然服务成功跑起来了，但是 `src/index.ts` 标有错误.

进化

1. changing a TS file also restarts the node app.

   1. 上面的 9 改为 `tsc -w`，这样就能在文件变化的时候监听。
   2. `npm i -g nodemon` ，安装完后 `nodemon .` 监听文件变化并重启应用。

2. Adding Type Definitions

   ```shell
   npm i -D @types/koa @types/koa-router @types/koa-json @types/koa-logger @types/koa-bodyparser 
   ```

3. Parsing Request Body

4. Adding Types for Request Body

   ```ts
   interface HelloRequest {
     name: string;
   }
   
   // Hello world
   router.post("/", async (ctx, next) => {
     const { name } = <HelloRequest>ctx.request.body;
     ctx.body = { name };
     await next();
   });
   ```

