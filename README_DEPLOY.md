# LOGI-COPILOT 배포용

## 폴더 구조

```text
logi_copilot_deploy/
├─ app.py
├─ requirements.txt
├─ .gitignore
├─ .streamlit/
│  └─ secrets.toml.example
└─ data/
   ├─ seoul.shp
   ├─ seoul.shx
   ├─ seoul.dbf
   ├─ seoul.prj
   ├─ depot.csv
   ├─ drivers.csv
   ├─ deliveries.csv
   ├─ knowledge.csv
   └─ routes_before_v2.csv
```

## 1. 데이터 넣기

현재 사용 중인 데이터 파일을 `data/` 폴더에 복사합니다.

Shapefile은 최소한 `seoul.shp`, `seoul.shx`, `seoul.dbf`가 함께 있어야 하며,
가능하면 `seoul.prj`, `seoul.cpg`도 같이 둡니다.

## 2. 패키지 설치

```bash
pip install -r requirements.txt
```

## 3. Gemini API 키

### 로컬
`.streamlit/secrets.toml.example`을 `.streamlit/secrets.toml`로 복사한 뒤:

```toml
GEMINI_API_KEY = "실제_API_KEY"
```

또는 환경변수 `GEMINI_API_KEY`를 사용할 수 있습니다.

### Streamlit Community Cloud
App settings의 Secrets에 다음을 등록합니다.

```toml
GEMINI_API_KEY = "실제_API_KEY"
```

API 키를 app.py에 직접 적지 않습니다.

## 4. 실행

```bash
streamlit run app.py
```

또는

```bash
python -m streamlit run app.py
```

## 5. 배포용 변경점

- Windows 절대경로 제거
- `app.py` 기준 상대경로 사용
- `data/` 폴더 자동 탐색
- `LOGI_DATA_DIR` 환경변수 지원
- Gemini 키를 환경변수 또는 Streamlit Secrets에서만 읽음
- 필수 CSV 및 Shapefile 구성요소 사전 검사
- Jupyter Notebook 없이 단독 실행 가능
- 기존 실시간 시뮬레이션, Gemini 자연어 지시, 동적 재배차,
  대기 큐, 후보 비교, 강제 배정, 전체 운행 종료 자동 정지 기능 유지
