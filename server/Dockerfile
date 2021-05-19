FROM python:3.8

RUN pip install fastapi uvicorn starlette requests numpy motor dnspython

COPY ./app /app

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]